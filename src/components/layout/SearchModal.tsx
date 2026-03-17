import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getSearchEntries, normalizeSearchText } from "../../data/dataSearch";

const INITIAL_RESULTS_LIMIT = 3;

function SearchModal({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [visibleResults, setVisibleResults] = useState(INITIAL_RESULTS_LIMIT);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setDebouncedQuery("");
      setVisibleResults(INITIAL_RESULTS_LIMIT);
    }
  }, [isOpen]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedQuery(query);
      setVisibleResults(INITIAL_RESULTS_LIMIT);
    }, 120);

    return () => window.clearTimeout(timeout);
  }, [query]);

  const normalizedQuery = useMemo(
    () => normalizeSearchText(debouncedQuery),
    [debouncedQuery],
  );

  const searchEntries = useMemo(
    () => getSearchEntries(t),
    [t, i18n.resolvedLanguage],
  );

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return searchEntries.filter(entry => entry.searchableText.includes(normalizedQuery));
  }, [normalizedQuery]);

  const displayedResults = results.slice(0, visibleResults);
  const hasMoreResults = results.length > visibleResults;

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <section className="search-modal" onClick={event => event.stopPropagation()}>
        <div className="search-modal-header">
          <h2>{t("searchModal.title")}</h2>
          <button type="button" className="search-close-button" onClick={onClose} aria-label={t("searchModal.close")}>
            <X size={18} />
          </button>
        </div>

        <div className="search-modal-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder={t("searchModal.placeholder")}
            className="search-input"
            autoFocus
          />
        </div>

        {normalizedQuery && (
          <ul className="search-results-list">
            {displayedResults.length === 0 ? (
              <li className="search-result-empty">{t("searchModal.noResults", { query: debouncedQuery })}</li>
            ) : (
              displayedResults.map(result => (
                <li key={result.id} className="search-result-item">
                  <Link to={result.route} onClick={onClose} className="search-result-link">
                    <strong>{result.title}</strong>
                    {result.section && <span>{result.section}</span>}
                    <p>{result.content}</p>
                  </Link>
                </li>
              ))
            )}
          </ul>
        )}

        {hasMoreResults && (
          <button
            type="button"
            className="search-more-button"
            onClick={() => setVisibleResults(current => current + INITIAL_RESULTS_LIMIT)}
          >
            {t("searchModal.moreResults")}
          </button>
        )}
      </section>
    </div>
  );
}

export default SearchModal;
