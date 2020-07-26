import React from 'react';
import { Page, Text, View, Document, StyleSheet,Font,Image } from '@react-pdf/renderer';
import {TableHeader,Table,TableCell,TableBody,DataTableCell} from '@david.kucsai/react-pdf-table';
// Create styles
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'blue',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  }, subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
});

export function PdfDocument(props) {
    return(
    <Document>
    <Page size="A4" style={styles.page}>
  


      <Text style={styles.header}>
                  Comcept
                </Text>
                <Text style={styles.title}>Your order summary</Text>
                <Text style={styles.author}>myBosphurus</Text>
                <Image
        style={styles.image}
        src="/assets/img/logo/mybos.png"
      />

    <Table
                    data={[
                        {firstName: props.firstName, lastName: props.lastName, company: props.company,country:props.country, address:props.address,secondAddress:props.secondAddress , city:props.city,total:props.total}
                    ]}
                >
                    <TableHeader>
                          <TableCell weighting={0.3}>
                              First Name
                          </TableCell>
                          <TableCell>
                              Last Name
                          </TableCell>
                          <TableCell>
                            Company
                          </TableCell>
                          <TableCell>
                              Country
                          </TableCell>
                          <TableCell>
                              Address
                          </TableCell>
                          <TableCell>
                             Total
                          </TableCell>
                          <TableCell>
                              city
                          </TableCell>
                    </TableHeader>
                    <TableBody>
                        <DataTableCell getContent={(r) => r.firstName}/>
                        <DataTableCell getContent={(r) => r.lastName}/>
                        <DataTableCell getContent={(r) => r.company}/>
                        <DataTableCell getContent={(r) => r.country}/>
                        <DataTableCell getContent={(r) => r.address}/>
                        <DataTableCell getContent={(r) => r.total}/>
                        <DataTableCell getContent={(r) => r.city}/>
                    </TableBody>
                </Table>
    </Page>
  </Document>);
}