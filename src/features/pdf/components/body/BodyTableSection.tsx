import { Text, View } from '@react-pdf/renderer';

import { styles } from '@/features/pdf/styles/invoice.styles';

const items = [
  {
    concento: 'contenido digital en platarforma',
    cantidad: 34534,
    precio: 34543,
    total: 3453,
  },
  {
    concento: 'contenido digital en platarforma',
    cantidad: 34534,
    precio: 34543,
    total: 3453,
  },
  {
    concento: 'contenido digital en platarforma',
    cantidad: 34534,
    precio: 34543,
    total: 3453,
  },
];

const BodyTableSection = () => {
  return (
    <View style={styles.tableSection}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableCellCol1}>CONCEPTO</Text>
        <Text style={styles.tableCellCol2}>CANTIDAD</Text>
        <Text style={styles.tableCellCol3}>PRECIO</Text>
        <Text style={styles.tableCellCol4}>TOTAL</Text>
      </View>
      <View style={styles.tableBody}>
        <View style={styles.tableBodyRow}>
          {items.map((row, index) => (
            <View
              key={row.total}
              style={[
                styles.tableBodyRowInner,
                index >= items.length - 1 ? { borderBottom: 'none' } : {},
              ]}
            >
              <Text style={styles.tableCellCol1}>{row.concento}</Text>
              <Text style={styles.tableCellCol2}>{row.cantidad}</Text>
              <Text style={styles.tableCellCol3}>{row.precio}</Text>
              <Text style={styles.tableCellCol4}>{row.total}</Text>
            </View>
          ))}
          <View style={styles.tableBodyRowTotal}>
            <Text>TOTAL A PAGAR</Text>
            <Text style={styles.tableBodyRowTotalAmount}>$106.20</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BodyTableSection;
