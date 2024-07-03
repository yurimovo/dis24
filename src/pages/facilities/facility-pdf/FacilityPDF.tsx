import React from "react";
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.section}>Section #1</Text>
            <Text style={styles.section}>Section #2</Text>
        </Page>
    </Document>
);

const FacilityPDF = () => {
    return (
        <div>
            <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download PDF'
                }
            </PDFDownloadLink>
        </div>
    )
};

export default FacilityPDF;