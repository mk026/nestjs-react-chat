import { FC } from "react";

import { IRoom } from "../../../models/room";
import { useUpdateRoomForm } from "../../../hooks/useUpdateRoomForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

interface UpdateRoomFormProps {
  room: IRoom;
}

const UpdateRoomForm: FC<UpdateRoomFormProps> = ({ room }) => {
  const { formMethods, onSubmit, isLoading } = useUpdateRoomForm(room);

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Room name" name="title" />
      <FormField label="Room description" name="description" />
      <LoadingButton isLoading={isLoading}>Update</LoadingButton>
    </Form>
  );
};

export default UpdateRoomForm;
