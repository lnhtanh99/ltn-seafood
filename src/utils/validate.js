import * as yup from 'yup';
import "yup-phone-lite";

export const validationSchema = yup.object({
    name: yup
        .string()
        .required('Dữ liệu bắt buộc!'),
    phone: yup
        .string()
        .phone("VN", "Số điện thoại không chính xác")
        .required("Dữ liệu bắt buộc!"),
    address: yup
        .string()
        .required('Dữ liệu bắt buộc!'),
    province: yup
        .number()
        .required('Dữ liệu bắt buộc!')
        .positive('Dữ liệu bắt buộc!')
        .integer(),
    district: yup
        .number()
        .required('Dữ liệu bắt buộc!')
        .positive('Dữ liệu bắt buộc!')
        .integer(),
    ward: yup
        .number()
        .required('Dữ liệu bắt buộc!')
        .positive('Dữ liệu bắt buộc!')
        .integer(),
});
