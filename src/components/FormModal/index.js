import { Form as AntdForm, Input, Modal } from "antd";
import { useFormModalHandlers } from "./helpers";
import "./style.css";

const FormModal = () => {
  const {
    formRef,
    isOpenModal,
    newFieldsValue,
    modalTitle,
    onSubmit,
    onCancel,
    inputsData,
  } = useFormModalHandlers({ AntdForm });

  return (
    <Modal
      visible={isOpenModal}
      closable={false}
      className="form-modal-container"
      okText="submit"
      onCancel={onCancel}
      title={modalTitle}
      okButtonProps={{
        htmlType: "submit",
        form: "countriesForm",
      }}
    >
      <AntdForm
        name="basic"
        onFinish={onSubmit}
        autoComplete="off"
        labelAlign="left"
        id="countriesForm"
        initialValues={newFieldsValue}
        form={formRef}
      >
        {inputsData.map((ele) => (
          <AntdForm.Item key={ele.name} {...ele}>
            <Input />
          </AntdForm.Item>
        ))}
      </AntdForm>
    </Modal>
  );
};

export default FormModal;
