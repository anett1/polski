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
    { dataField: "id", text: "id" },
    { dataField: "polish", text: "polish" },
    { dataField: "english", text: "english" },
    {
      dataField: "src",
      text: "audio",
      formatter: (src) => (
        <AudioPlayerProvider>
          <AudioPlayer file={src} />
        </AudioPlayerProvider>
      ),
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
              keyField="id"
              data={words}
              columns={columns}
              {...paginationTableProps}
            />
          </div>
        )}
      </PaginationProvider>
    </>
  );
};

export default Table;
