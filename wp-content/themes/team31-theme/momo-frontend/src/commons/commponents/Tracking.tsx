import React from "react"
import { css } from "@emotion/css";
import MJModal from "../../components/MJModal"
import MJTable from "../../components/MJTable";
import MJTypography from "../../components/MJTypography";
import MJAvatar from "../../components/MJAvatar";

interface TrackingProps {
    open: boolean;
    onClose: () => void;
}

const tableCss = css`
    & th:first-of-type, & td:first-of-type {
        width: 25%;
    }
`;

const iconListCss = css`
    display: flex;
`;

interface IconDivProps {
    iconUrl: string;
    name: string;
}

const IconDiv: React.FC<IconDivProps> = ({ iconUrl, name }) => {
    return (
        <div className={iconListCss}>
            <MJAvatar size="S" src={iconUrl} />
            <MJTypography variant="body2" style={{ marginLeft: "20px", marginTop: "6.4px" }}>
                {name}
            </MJTypography>
        </div>
    );
};

export const Tracking: React.FC<TrackingProps> = ({ open, onClose}) => {
    return (
        <MJModal
            open={open}
            title={"足あと"}
            onClose={onClose}
            body={
                <MJTable 
                    title={["日付", "名前"]}
                    className={tableCss}
                    data={[
                        { 
                            date: <MJTypography variant="body2" bold={true} align="center">2023/10/01</MJTypography>, 
                            action: <IconDiv iconUrl={"https://example.com"} name="ssss" />,
                        },
                    ]}
                />
            }
        />
    )
}