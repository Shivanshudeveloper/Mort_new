import { Box, Button, Card, CardHeader, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Head from 'next/head';
import React from 'react'
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import { FinanceProfitableProducts } from '../../components/dashboard/finance/finance-profitable-products';
import { ArrowRight as ArrowRightIcon } from '../../icons/arrow-right';
import { Scrollbar } from '../../components/scrollbar';
import numeral from 'numeral';

const products = [
    {
        id: 1,
        productionMetrics: 'MTD Volume',
        funding: 1000000,
        submission: 723000,
        pipeline: 430000
    },
    {
        id: 2,
        productionMetrics: 'MTD Volume',
        funding: 1000000,
        submission: 723000,
        pipeline: 430000
    },
    {
        id: 3,
        productionMetrics: 'MTD Volume',
        funding: 1000000,
        submission: 723000,
        pipeline: 430000
    },
    {
        id: 4,
        productionMetrics: 'MTD Volume',
        funding: 1000000,
        submission: 723000,
        pipeline: 430000
    },
]

const ProductionMetrics = () => {
  return (
    <>
        <Head>
            <title>
                Dashboard: Production Metrics | Material Kit Pro
            </title>
        </Head>
        <Box
            component="main"
            sx={{
            flexGrow: 1,
            py: 8
            }}
        >
            <Container maxWidth="xl">
                <FinanceProfitableProducts/>

                <Card style={{marginTop:'40px'}}>
                    <CardHeader
                        title="Production Metrics"
                    />
                    <Scrollbar>
                    <Table sx={{ minWidth: 700 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Production Metrics</TableCell>
                                <TableCell>Funding</TableCell>
                                <TableCell>Submission</TableCell>
                                <TableCell>Pipeline</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                products.map(product => (
                                    <TableRow>
                                        <TableCell>
                                            {product.productionMetrics}
                                        </TableCell>
                                        <TableCell>
                                            {numeral(product.funding).format(`$0,0.00`)}
                                        </TableCell>
                                        <TableCell>
                                            {numeral(product.submission).format(`$0,0.00`)}
                                        </TableCell>
                                        <TableCell>
                                            {/* ${product.pipeline} */}
                                            {numeral(product.pipeline).format(`$0,0.00`)}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                    </Scrollbar>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 2
                        }}
                        >
                        <Button
                            endIcon={<ArrowRightIcon fontSize="small" />}
                            size="small"
                            sx={{ cursor: 'pointer' }}
                        >
                            See All
                        </Button>
                    </Box>
                </Card>
            </Container>
        </Box>
    </>
  )
};

ProductionMetrics.getLayout = (page) => (
    <AuthGuard>
      <DashboardLayout>
        {page}
      </DashboardLayout>
    </AuthGuard>
  );

export default ProductionMetrics