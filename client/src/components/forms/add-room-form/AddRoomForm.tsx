import { FC } from "react";

import { useAddRoomForm } from "../../../hooks/useAddRoomForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const AddRoomForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useAddRoomForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Room name" name="title" />
      <FormField label="Room description" name="description" />
      <LoadingButton isLoading={isLoading}>Save</LoadingButton>
    </Form>
  );
};

export default AddRoomForm;
