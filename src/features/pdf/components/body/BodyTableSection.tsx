import { Text, View } from '@react-pdf/renderer';

import { ILabelValue } from '@/features/invoice/interfaces/invoice.types';
import { IPDFInvoiceTable } from '@/features/pdf/interfaces/invoice-pdf.types';
import { styles } from '@/features/pdf/styles/invoice.styles';

type Props = {
  table: IPDFInvoiceTable;
  totalDue: ILabelValue;
};

const BodyTableSection = ({ table, totalDue }: Props) => {
  return (
    <View style={styles.tableSection}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableCellCol1}>{table.columns.itemHeader}</Text>
        <Text style={styles.tableCellCol2}>{table.columns.quantityHeader}</Text>
        <Text style={styles.tableCellCol3}>{table.columns.unitCostHeader}</Text>
        <Text style={styles.tableCellCol4}>{table.columns.amountHeader}</Text>
      </View>
      <View style={styles.tableBody}>
        <View style={styles.tableBodyRow}>
          {table.items.map((row, index) => (
            <View
              key={row.quantity}
              style={[
                styles.tableBodyRowInner,
                index >= table.items.length - 1 ? { borderBottom: 'none' } : {},
              ]}
            >
              <Text style={styles.tableCellCol1}>{row.description}</Text>
              <Text style={styles.tableCellCol2}>{row.quantity}</Text>
              <Text style={styles.tableCellCol3}>{row.price}</Text>
              <Text style={styles.tableCellCol4}>{row.total}</Text>
            </View>
          ))}
          <View style={styles.tableBodyRowTotal}>
            <Text>{totalDue.label}</Text>
            <Text style={styles.tableBodyRowTotalAmount}>{totalDue.value}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BodyTableSection;
