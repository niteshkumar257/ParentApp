import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const DataTable = () => {
  tableHead= ['Head', 'Head2', 'Head3', 'Head4'],
  tableData=[
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd']
  ]
  return (
    <View style={styles.container}>
    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
      <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
      <Rows data={tableData} textStyle={styles.text}/>
    </Table>
  </View>
  )
}

export default DataTable;
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});