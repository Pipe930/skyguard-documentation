import Callout from "../components/ui/Callout";
import CodeBlock from "../components/ui/CodeBlock";
import { useTranslation } from "react-i18next";
import { codeExampleArrayValidation, codeExampleCompleteSchema, codeExampleConverteTypes, codeExampleErrorHandling, codeExampleNestedOjects, codeExampleOptionalFields, codeExampleTypeArray, codeExampleTypeBigint, codeExampleTypeBoolean, codeExampleTypeDate, codeExampleTypeLiteral, codeExampleTypeNumber, codeExampleTypeObject, codeExampleTypeString, codeExampleTypeUnion, codeExampleValidation } from "../data/dataValidation";

function Validation() {
  const { t } = useTranslation();

  return (
    <>
      <section id="validation" className="docs-section">
        <h1>{t("validation.page.title")}</h1>
        <p>{t("validation.page.lead")}</p>
      </section>
      <hr />
      <section id="basic-validation" className="docs-section">
        <h2>{t("validation.basic.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("validation.basic.description") }} />
        <CodeBlock code={codeExampleValidation} />
      </section>
      <section id="schema-types" className="docs-section">
        <h2>{t("validation.types.title")}</h2>
        <p>{t("validation.types.description")}</p>
        <div id="schema-types-string" className="docs-subsection">
          <h3>Strings</h3>
          <CodeBlock code={codeExampleTypeString} />
        </div>
        <div id="schema-types-number" className="docs-subsection">
          <h3>Numbers</h3>
          <CodeBlock code={codeExampleTypeNumber} />
        </div>
        <div id="schema-types-boolean" className="docs-subsection">
          <h3>Booleans</h3>
          <CodeBlock code={codeExampleTypeBoolean} />
        </div>
        <div id="schema-types-bigint" className="docs-subsection">
          <h3>Bigints</h3>
          <CodeBlock code={codeExampleTypeBigint} />
        </div>
        <div id="schema-types-date" className="docs-subsection">
          <h3>Dates</h3>
          <CodeBlock code={codeExampleTypeDate} />
        </div>
        <div id="schema-types-array" className="docs-subsection">
          <h3>Arrays</h3>
          <CodeBlock code={codeExampleTypeArray} />
        </div>
        <div id="schema-types-object" className="docs-subsection">
          <h3>Objects</h3>
          <CodeBlock code={codeExampleTypeObject} />
        </div>
        <div id="schema-types-literal" className="docs-subsection">
          <h3>Literals</h3>
          <CodeBlock code={codeExampleTypeLiteral} />
        </div>
        <div id="schema-types-union" className="docs-subsection">
          <h3>Unions</h3>
          <CodeBlock code={codeExampleTypeUnion} />
        </div>
      </section>
      <section id="optional-fields" className="docs-section">
        <h2>{t("validation.optionalFields.title")}</h2>
        <p>{t("validation.optionalFields.description")}</p>
        <CodeBlock code={codeExampleOptionalFields} />
      </section>
      <section id="converter-fields" className="docs-section">
        <h2>{t("validation.converter.title")}</h2>
        <p>{t("validation.converter.description")}</p>
        <CodeBlock code={codeExampleConverteTypes} />
        <Callout variant="tip">
          {t("validation.converter.tip")}
        </Callout>
      </section>
      <section id="validating-different-parts" className="docs-section">
        <h2>{t("validation.differentParts.title")}</h2>
        <p>{t("validation.differentParts.description")}</p>
        <CodeBlock code={codeExampleCompleteSchema} />
      </section>
      <section id="nested-objects" className="docs-section">
        <h2>{t("validation.nestedObjects.title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("validation.nestedObjects.description") }} />
        <CodeBlock code={codeExampleNestedOjects} />
      </section>
      <section id="validation-array" className="docs-section">
        <h2>{t("validation.arrayValidation.title")}</h2>
        <p>{t("validation.arrayValidation.description")}</p>
        <CodeBlock code={codeExampleArrayValidation} />
      </section>
      <section id="error-handling" className="docs-section">
        <h2>{t("validation.errorHandling.title")}</h2>
        <p>{t("validation.errorHandling.description")}</p>
        <CodeBlock code={codeExampleErrorHandling} />
        <Callout variant="warn">
          {t("validation.errorHandling.warn")}
        </Callout>
      </section>
    </>
  );
}

export default Validation;
