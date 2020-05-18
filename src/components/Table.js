import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";
import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from "./AudioPlayer";

//import img1 from "../assets/bajka.mp3";

const Table = ({ words }) => {
  const options = {
    custom: true,
    totalSize: words.length,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "25",
        value: 25,
      },
      {
        text: "35",
        value: 35,
      },
      {
        text: "45",
        value: 45,
      },
      {
        text: "All",
        value: words.length,
      },
    ],
  };

  const columns = [
    {
      dataField: "id",
      text: "id",
      sort: true,
      headerStyle: () => {
        return {
          width: "60px",
        };
      },
      align: "center",
    },
    { dataField: "polish", text: "polish", sort: true },
    { dataField: "english", text: "english", sort: true },
    {
      dataField: "src",
      text: "audio",
      sort: false,
      headerStyle: () => {
        return {
          width: "60px",
        };
      },
      align: "center",

      formatter: (src) => (
        <AudioPlayerProvider>
          <AudioPlayer file={src} />
        </AudioPlayerProvider>
      ),
    },
  ];
  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];
  return (
    <>
      <PaginationProvider pagination={paginationFactory(options)}>
        {({ paginationProps, paginationTableProps }) => (
          <div>
            <PaginationListStandalone {...paginationProps} />
            <SizePerPageDropdownStandalone {...paginationProps} />
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={words}
              columns={columns}
              {...paginationTableProps}
              defaultSorted={defaultSorted}
            />
          </div>
        )}
      </PaginationProvider>
    </>
  );
};

export default Table;
