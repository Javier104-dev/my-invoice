import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    letterSpacing: 0.3,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0A0A0A',
    color: '#FFFFFF',
    borderBottomWidth: 2,
    borderBottomColor: '#B78A2F',
  },
  companyBranding: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoContainer: {
    width: 80,
  },
  logo: {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: 'auto',
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  invoiceHeader: { gap: 6, alignItems: 'flex-end' },
  invoiceTitle: {
    color: '#B78A2F',
  },
  invoiceNumber: { fontSize: 20 },
  invoiceDate: {
    color: '#8A8A8A',
  },
  body: {
    gap: 20,
  },
  paymentSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  payeeSection: {
    gap: 5,
  },
  totalSectionLabelBox: {
    gap: 5,
  },
  payeeSectionLabel: {
    color: '#B78A2F',
  },
  payeeSectionName: {
    fontSize: 15,
  },
  totalSection: {
    color: '#B78A2F',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D6D6D6',
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    gap: 5,
    borderRadius: 5,
  },
  goldUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: '#B78A2F',
    width: 15,
    marginTop: 2,
    alignSelf: 'flex-start',
  },
  totalSectionAmount: { fontSize: 30, fontWeight: 'bold' },
  tableSection: { borderRadius: 5 },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontWeight: 'bold',
    color: '#B78A2F',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '100%',
  },
  tableCellCol1: { flex: 3 },
  tableCellCol2: { flex: 1, textAlign: 'center' },
  tableCellCol3: { flex: 1, textAlign: 'center' },
  tableCellCol4: { flex: 1, textAlign: 'right' },
  tableBody: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D6D6D6',
    backgroundColor: '#F5F5F5',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
  },
  tableBodyRow: {
    paddingHorizontal: 15,
  },
  tableBodyRowInner: {
    flexDirection: 'row',
    borderBottom: '1px solid #D6D6D6',
    paddingVertical: 10,
  },
  tableBodyRowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderTop: '1px solid #B78A2F',
    color: '#B78A2F',
    fontSize: 12,
  },
  tableBodyRowTotalAmount: {
    fontSize: 20,
  },
  additionalInfoSection: {
    flexDirection: 'row',
  },
  additionalInfoColumns: {
    flexDirection: 'row',
    width: '50%',
    gap: 10,
  },
  additionalInfoColumnsContent: {
    width: '80%',
    gap: 5,
    fontSize: 9,
  },
  additionalInfoColumnsTitle: {
    color: '#B78A2F',
    fontWeight: 'bold',
  },
  additionalInfoColumnsText: {
    lineHeight: 0.8,
  },
  footerSection: {
    marginTop: 'auto',
  },
  footerSectionContent: {
    paddingHorizontal: 30,
  },
  footerDividerSection: {
    borderTop: '1px solid #B78A2F',
    paddingVertical: 20,
    alignItems: 'center',
    gap: 5,
  },
  footerSectionAgencyName: {
    color: '#B78A2F',
  },
});
