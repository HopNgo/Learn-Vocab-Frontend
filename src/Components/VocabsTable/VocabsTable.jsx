import { useContext } from "react";
import MaterialTable from "@material-table/core";
import VocabsContext from "../../store/VocabsContext";
import { deleteVocab, postVocab, updateVocab } from "../../api/index";

function VocabsTable() {
  console.log("re-render-vocabsTable");

  const { vocabs, setVocabs } = useContext(VocabsContext);

  const columns = [
    { title: "Tiếng anh", field: "en" },
    { title: "Tiếng việt", field: "vn" },
  ];
  console.log(vocabs);
  return (
    <>
      <MaterialTable
        style={{
          color: "rgb(8, 33, 116)",
          backgroundColor: "#f9f9f9",
          borderRadius: "50px",
          padding: "20px",
        }}
        columns={columns}
        data={vocabs}
        isLoading={vocabs[0].en.length > 0 ? false : true}
        title="Thông tin danh sách từ vựng"
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(newRow);
                postVocab(newRow).then((res) =>
                  setVocabs([...vocabs, res.data])
                );
                resolve();
              }, 600);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve) => {
              setTimeout(() => {
                console.log(newRow, oldRow);
                updateVocab(newRow).then((res) => {
                  const updateVocabs = [...vocabs];
                  updateVocabs[oldRow.tableData.id] = res.data;
                  setVocabs(updateVocabs);
                });
                resolve();
              }, 600);
            }),

          onRowDelete: (seletedRow) =>
            new Promise((resolve) => {
              setTimeout(() => {
                deleteVocab(seletedRow).then((res) => {
                  const deleteVocabs = [...vocabs];
                  deleteVocabs.splice(seletedRow.tableData.id, 1);
                  setVocabs(deleteVocabs);
                });
                resolve();
              }, 600);
            }),
        }}
        options={{
          headerStyle: {
            backgroundColor: "#f9f9f9",
            color: "rgb(8, 33, 116)",
            fontStyle: "italic",
          },
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          paging: true,
          pageSizeOptions: [5, 7, 12, 15],
          addRowPosition: "first",
          actionsColumnIndex: -1,
        }}
        localization={{
          toolbar: { searchPlaceholder: "Tìm kiếm" },
          header: {
            actions: "",
          },
          body: {
            editRow: {
              deleteText: "Bạn có muốn xóa từ vựng này không ?",
            },
          },
          pagination: {
            labelRowsSelect: "hàng",
            labelRowsPerPage: ""
          },
        }}
      />
    </>
  );
}

export default VocabsTable;
