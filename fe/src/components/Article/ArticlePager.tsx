import React, { useState } from "react";
import "@/assets/CSS/Article/articlePager.scss";
import { SwitchContext } from "@/GlobalContext/globalContext";
interface Props {
  pageNum: number;
}
function ArticlePager(props: Props) {
  const [curPage, setCurPage] = useState(1);

  return (
    <SwitchContext.Consumer>
      {({ toggleSwitch }) => {
        const toNextPage = () => {
          if (curPage >= props.pageNum) return;
          toggleSwitch();
          setCurPage((preNum) => preNum + 1);
        };
        const toPrePage = () => {
          if (curPage <= 1) return;
          toggleSwitch();
          setCurPage((preNum) => preNum - 1);
        };
        const pageItem = new Array(props.pageNum).fill(0).map((x, i) => (
          <div
            className={
              "page" +
              (Math.abs(curPage - i - 1) < 3 ? "" : " hide") +
              (curPage === i + 1 ? " active" : "")
            }
            key={i}
            onClick={() => {
              if(curPage === i + 1) return;
              toggleSwitch();
              setCurPage(i + 1);
            }}
          >
            {i + 1}
          </div>
        ));

        return (
          <div data-component="articlePager">
            <div className="pages">
              <div
                className={
                  "pre ic i-angle-left" + (curPage <= 1 ? " disable" : "")
                }
                onClick={toPrePage}
              ></div>
              {pageItem}
              <div
                className={
                  "next ic i-angle-right" +
                  (curPage >= props.pageNum ? " disable" : "")
                }
                onClick={toNextPage}
              ></div>
            </div>
          </div>
        );
      }}
    </SwitchContext.Consumer>
  );
}
export default ArticlePager;
