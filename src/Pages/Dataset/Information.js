import React from "react";
import { useSelector } from "react-redux";

export default function DataSetInformation() {
  const dataset_detail = useSelector((state) => state.dataset.dataset_detail);
  return (
    <div>
      <h1>Dataset Information</h1>
      <div>
        <div>name : {dataset_detail.name}</div>
        <div>description : {dataset_detail.description}</div>
        <div>count : {dataset_detail.count}</div>
        <div>size : {dataset_detail.size}</div>
        <div>data_type : {dataset_detail.data_type}</div>
        <div>number_of_labels : {dataset_detail.number_of_labels}</div>
        <div>labels : {dataset_detail.labels.join(" ,")}</div>
      </div>
    </div>
  );
}
