/** @jsxImportSource @emotion/react */
import React, { useMemo } from "react";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MJInput from "../../../components/MJInput";
import MJTextarea from "../../../components/MJTextarea";
import { css } from "@emotion/react";
import MJButton from "../../../components/MJButton";
import WPSupporter from "../../../commons/wpSupporter";
import { useUser } from "../../../context/UserContext";
import { useSnackbar } from "../../../context/SnackbarContext";

interface ContactFormProps {
    id: string;
    onSubmitEnd?: () => void;
}

interface FormValue {
    name: string;
    email: string;
    phoneNumber: string;
    lineId: string;
    message: string;
}

const ContactForm: React.FC<ContactFormProps> = ( { id, onSubmitEnd }) => {

    const initialData = useMemo(() => {
        return {
            name: '',
            email: '',
            phoneNumber: '',
            lineId: '',
            message: ''
        }
    },[]);

    const { showSnackbar, showErrorSnackbar } = useSnackbar();

    const userContext = useUser();
    if (!userContext) {
        return null; // or handle the null case appropriately
    }
    const { user } = userContext;
    const role = user?.roles[0];
    const isAdmin = role === 'administrator';

    const wps = WPSupporter(isAdmin);

    const schema = yup.object().shape({
        name: yup.string().required('名前を入力してください'),
        email: yup.string().email('メールアドレスが正しくありません').required('メールアドレスを入力してください'),
        phoneNumber: yup.string().required('電話番号を入力してください'),
        lineId: yup.string().required('LINE IDを入力してください'),
        message: yup.string().required('メッセージを入力してください')
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { control, handleSubmit,  formState: { errors } } = useForm({
        defaultValues: initialData,
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });

    const onSubmit = (data: FormValue) => {
        // ここでwps.postを行う
        const formattedData = {
            'requested_to': id,
            'request_amount': '3000',
            'name': data.name,
            'email': data.email,
            'phone_number': data.phoneNumber,
            'line_id': data.lineId,
            'message': data.message
        }
        const res = wps.post('kibidango/kibi_request', formattedData);
        res.then((_res) => {
            showSnackbar({ message: 'きびだんごを申請しました' });
            onSubmitEnd?.();
        }).catch((error) => {
            showErrorSnackbar({ message: 'きびだんごの申請に失敗しました' });
            console.error(error);
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} css={css`margin-bottom: 120px;`}>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <div css={inputCss}>
                        <MJInput label="名前" isRequired={true} {...field} errorMessage={errors.name?.message} type="text" />
                    </div>
                )}
            />
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <div css={inputCss}>
                        <MJInput label="メールアドレス" {...field} isRequired={true} errorMessage={errors.email?.message} type="text" />
                    </div>
                )}
            />
            <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                    <div css={inputCss}>
                        <MJInput label="電話番号" {...field} isRequired={true} errorMessage={errors.phoneNumber?.message} type="text" />
                    </div>
                )}
            />
            <Controller
                name="lineId"
                control={control}
                render={({ field }) => (
                    <div css={inputCss}>
                        <MJInput label="LINE ID" {...field} isRequired={true} errorMessage={errors.lineId?.message} type="text" />
                    </div>
                )}
            />
            <Controller
                name="message"
                control={control}
                render={({ field }) => (
                    <div css={inputCss}>
                        <MJTextarea label="メッセージ" {...field} isRequired={true} errorMessage={errors.message?.message} type="text" />
                    </div>
                )}
            />
            <MJButton css={buttonCss} label="フォームを送信" isFat={true} submit={true} />
        </form>
    );
}

const buttonCss = css`
    margin-top: 20px;
    float: right;
`;

const inputCss = css`
    margin-bottom: 20px;
`;
export default ContactForm;