import { FC, PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { render, screen } from "@testing-library/react";

import FormField from ".";

it("Should render FormField", () => {
  const fieldName = "field";
  const fieldLabel = "Test Field";

  const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
    const methods = useForm();

    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  render(
    <Wrapper>
      <FormField name={fieldName} label={fieldLabel} />
    </Wrapper>
  );

  const element = screen.getByText(fieldLabel, { ignore: "span" });

  expect(element).toBeInTheDocument();
});
