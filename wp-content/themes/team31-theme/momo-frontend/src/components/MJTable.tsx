import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface RowData {
    title: string[];
    className?: string;
    data: Record<string, React.ReactNode>[];
}

const MJTable: React.FC<RowData> = ({title, data, className}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table className={className}>
            <TableHead>
                <TableRow>
                    {title.map((header, index) => (
                        <TableCell key={index} align='center'>
                            <strong>{header}</strong>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, index) => (
                    <TableRow
                        key={index}
                        sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                        }}
                    >
                        {Object.values(row).map((cell: React.ReactNode, cellIndex) => (
                            <TableCell key={cellIndex}>{cell}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MJTable;