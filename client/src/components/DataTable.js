import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const DataTable = ({
    data,
    columns
}) => {

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        {columns.map((column) => (
                            <Th key={column}>{column}</Th>
                        ))
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((row) => (
                        <Tr key={row.id}>
                            {Object.keys(row).map((key) => (
                                <Td key={key}>{row[key]}</Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
