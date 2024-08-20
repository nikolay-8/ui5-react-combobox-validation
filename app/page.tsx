"use client";

import { useForm } from "react-hook-form";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/Select";
import {
  Button,
  ComboBox,
  ComboBoxItem,
  FlexBox,
  Form,
  FormGroup,
  FormItem,
  Input,
  Label,
  ObjectPage,
  Option,
  Select,
} from "@ui5/webcomponents-react";
import { useEffect, useState } from "react";

const formFields = [
  { name: "textbox", label: "Text Box:", required: true },
  {
    name: "select",
    label: "Select:",
    required: true,
    options: [
      { value: undefined, label: "" },
      { value: "select1", label: "Select 1" },
      { value: "select2", label: "Select 2" },
      { value: "select3", label: "Select 3" },
    ],
  },
  {
    name: "combobox",
    label: "Combo Box:",
    required: true,
    options: [
      { value: undefined, label: "" },
      { value: "combo1", label: "Combo 1" },
      { value: "combo2", label: "Combo 2" },
      { value: "combo3", label: "Combo 3" },
    ],
  },
];

export default function Page() {
  const [state, setState] = useState<{ name: string; defaultValue: string }[]>(
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState([
        {
          name: "textbox",
          defaultValue: "",
        },
        {
          name: "select",
          defaultValue: "",
        },
        {
          name: "combobox",
          defaultValue: "",
        },
      ]);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    shouldFocusError: false,
  });

  const onSubmit = () => {
    handleSubmit(submitAction)();
  };

  const submitAction = () => {
    alert("Submit with no validation errors");
  };

  return (
    <ObjectPage
      headerContent={<>Form</>}
      footer={<Button onClick={onSubmit}>Submit</Button>}
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {formFields.map((field) => {
          const defaultValue =
            state && state.length > 0
              ? state.find((item) => item.name === field.name)?.defaultValue
              : undefined;
          return (
            <FormGroup key={field.name} titleText="">
              <FormItem>
                <FlexBox direction="Column">
                  <Label key={field.label} for={field.name}>
                    {field.label}
                  </Label>

                  {field.name === "textbox" && (
                    <Input
                      value={defaultValue}
                      {...register(field.name as "textbox", {
                        required: field.required,
                      })}
                    />
                  )}

                  {field.name === "select" && (
                    <Select
                      {...register(field.name, {
                        required: field.required,
                      })}
                    >
                      {field.options?.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  )}

                  {field.name === "combobox" && (
                    <ComboBox
                      value={defaultValue}
                      {...register(field.name, {
                        required: field.required,
                      })}
                    >
                      {field.options?.map((option) => (
                        <ComboBoxItem key={option.value} text={option.value}>
                          {option.label}
                        </ComboBoxItem>
                      ))}
                    </ComboBox>
                  )}

                  {(errors as any)[field.name] && (
                    <p>{field.label} is required</p>
                  )}
                </FlexBox>
              </FormItem>
            </FormGroup>
          );
        })}
      </Form>
    </ObjectPage>
  );
}
