/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useKBSnackbar } from '../../../context/KBSnackbarContext';
import KibiDescriptionModal from './components/KibiDescriptionModal';
import WPSupporter from '../../../commons/wpSupporter';
import { set } from 'react-hook-form';

interface KibiPageContainerProps {
    monkeydog_id?: string;
}

interface Row {
    id: string;
    user_id: string;
    name: string;
    request_amount: string;
}

const KibiPageContainer: React.FC<KibiPageContainerProps> = ({ monkeydog_id }) => {
    const { showSnackbar, showErrorSnackbar } = useKBSnackbar();
    const [open, setOpen] = React.useState(Boolean(monkeydog_id));
    const wps = WPSupporter(false);
    
    const [rows, setRows] = React.useState<Row[]>([]);
    const [details, setDetails] = React.useState<any>({});

    const fetchData = async () => {
        setRows([]);
        const res = await wps.get('kibidango/now_requests');
        const data = res.map((item: any) => {
            return {
                id: item.id,
                user_id: item.user_id,
                name: item.name,
                request_amount: item.request_amount,
            };
        });

        setRows(data);
    }

    React.useEffect(() => {

        try {
            fetchData();
        } catch (error) {
            showSnackbar({ message: 'データの取得に失敗しました' });
        }
    }, []);

    const aproove = async (id: string) => {
        try {
            const data = wps.post(`kibidango/kibi_request/aproove`, { id: String(Number(id)+3) });
            data.then((_res) => {
                if (open) {
                    setOpen(false);
                }
                showSnackbar({ message: 'きびだんご付与を承認しました'});
                fetchData();
            }).catch((error) => {
                console.error(error);
                showErrorSnackbar({ message: 'きびだんご付与の承認に失敗しました' });
            });
        } catch (error) {
            console.error(error);
            showErrorSnackbar({ message: 'きびだんご付与の承認に失敗しました' });
        }
    }

    const reject = async (id: string) => {
        try {
            const data = wps.post(`kibidango/kibi_request/reject`, { id: String(Number(id)+3) });
            data.then((_res) => {
                if (open) {
                    setOpen(false);
                }
                showSnackbar({ message: 'きびだんご付与を拒否しました'});
                fetchData();
            }).catch((error) => {
                console.error(error);
                showErrorSnackbar({ message: 'きびだんご付与の拒否に失敗しました' });
            });
        } catch (error) {
            console.error(error);
            showErrorSnackbar({ message: 'きびだんご付与の拒否に失敗しました' });
        }
    }

    const openDescription = async (id: string) => {
        console.log(Number(id)+3);
        const res = await wps.get(`kibidango/now_request?id=${Number(id)+3}`);
        setDetails(res);
        setOpen(true);
    }

    const returnToTop = async () => {
        setOpen(false);
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: "100%", overflowX: "auto" }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" style={{ fontWeight: 'bold' }}>さるきじID</TableCell>
                        <TableCell align="center" style={{ fontWeight: 'bold' }}>名前</TableCell>
                        <TableCell align="center" style={{ fontWeight: 'bold' }}>申請ポイント数</TableCell>
                        <TableCell align="center" style={{ fontWeight: 'bold' }}>操作</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align='center' style={{ minWidth: '90px', fontWeight: 'bold' }}>{row.user_id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right" style={{ minWidth: '120px', fontWeight: 'bold' }}>{row.request_amount}</TableCell>
                            <TableCell style={{ minWidth: '300px'}}>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                    <Button variant='contained' onClick={() => aproove(row.id)} color='primary'>承認</Button>
                                    <Button variant='contained' onClick={() => reject(row.id)} color='error'>拒否</Button>
                                    <Button variant='outlined' color='success' onClick={() => openDescription(row.id)}>情報を見る</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <KibiDescriptionModal 
                title={`${details.name}さんの情報`}
                body={
                    <>
                        <List>
                            <ListItem>
                                <ListItemText primary={details.name} secondary="名前" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="21" secondary="年齢" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={details.email} secondary="メールアドレス" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={details.line_id} secondary="LINE ID" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={details.message} secondary="メッセージ" />
                            </ListItem>
                        </List>
                        <div className={kibiButtonCss}>
                            <Button variant='contained' onClick={() => aproove(details.id)} color='primary'>承認</Button>
                            <Button variant='contained' onClick={() => reject(details.id)} color='error'>拒否</Button>
                            <Button variant='outlined' onClick={returnToTop} color='error'>閉じる</Button>
                        </div>
                    </>
                }
                open={open} 
            />
        </TableContainer>
    );
};

const kibiButtonCss = css`
    display: flex;
    justify-content: end;
    gap: 8px;

    .MuiButtonBase-root {
        padding: 8px 25px;
    }
`

export default KibiPageContainer;