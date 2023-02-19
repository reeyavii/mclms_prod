import React, { useEffect } from "react";

function CustomTable({ columns, data }) {
  // const [currentData, setCurrentData] = useState();
  // const arrayList = (data) => {
  //   const array = [];
  //   Object.keys(data).map(function (element, idx) {
  //     console.log(data);
  //     // data.map((item) => {
  //     //   console.log();
  //     // });
  //   });
  // };
  // useEffect(() => {

  // }, []);

  console.log(data);
  return (
    <table>
      <thead>
        {/* {arrayList(data)} */}
        <tr>
          {columns.map((col) => {
            return <th>{col}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {data &&
          data.map((item, index) => {
            return (
              <tr key={index}>
                {Object.keys(item).map(function (element, idx) {
                  return <td>{item[element]}</td>;
                })}
              </tr>
            );
            // console.log(item);
            // return <tr key={index}>
            //   {
            //     Object.keys(item).map(function (element, idx){
            //     return (
            //       <td>
            //         </td>
            //     )
            //   })

            // }
            // </tr>;
          })}
      </tbody>
    </table>
  );
}

export default CustomTable;
