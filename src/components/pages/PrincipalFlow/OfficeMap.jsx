import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainLayout } from "../../layout/MainLayout";
import { Box, Typography, useMediaQuery, Snackbar, Alert } from "@mui/material";
import style from "./OfficeMap.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateIssue } from "../../../store/issue";

import ButtonGlobant from "../../commons/ButtonGlobant";

function OfficeMap() {
  const selectedOfficeMap = `<svg
        width="1110"
        height="1160"
        viewBox="0 0 1110 1160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1110" height="1160" fill="#E5E5E5" />
        <rect
          id="Rectangle Main"
          width="1110"
          height="1160"
          rx="34"
          fill="white"
        />
        <rect
          id="Rectangle Main"
          x="67"
          y="40"
          width="967"
          height="401"
          rx="8"
          fill="#D7E3ED"
        />
      
        <g id="dsks">
          <rect
            id="Rectangle 130"
            x="192.298"
            y="120.748"
            width="73"
            height="40"
            transform="rotate(35 192.298 120.748)"
            fill="#AFC0CD"
          />
      
          <rect
            id="Rectangle 136"
            x="186.916"
            y="117.943"
            width="83.9497"
            height="40"
            transform="rotate(125 186.916 117.943)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137"
            x="419.272"
            y="282.691"
            width="83.9497"
            height="40"
            transform="rotate(125 419.272 282.691)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131"
            x="256.298"
            y="165.748"
            width="73"
            height="40"
            transform="rotate(35 256.298 165.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132"
            x="320.298"
            y="211.748"
            width="73"
            height="40"
            transform="rotate(35 320.298 211.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133"
            x="166.297"
            y="157.748"
            width="73"
            height="40"
            transform="rotate(35 166.297 157.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134"
            x="230.298"
            y="203.748"
            width="73"
            height="40"
            transform="rotate(35 230.298 203.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135"
            x="295.298"
            y="249.748"
            width="73"
            height="40"
            transform="rotate(35 295.298 249.748)"
            fill="#AFC0CD"
          />
        </g>
        <g id="dsks_2">
          <rect
            id="Rectangle 130_2"
            x="468.299"
            y="120.748"
            width="73"
            height="40"
            transform="rotate(35 468.299 120.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 136_2"
            x="462.917"
            y="117.943"
            width="83.9497"
            height="40"
            transform="rotate(125 462.917 117.943)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137_2"
            x="695.274"
            y="282.691"
            width="83.9497"
            height="40"
            transform="rotate(125 695.274 282.691)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131_2"
            x="532.299"
            y="165.748"
            width="73"
            height="40"
            transform="rotate(35 532.299 165.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132_2"
            x="596.299"
            y="211.748"
            width="73"
            height="40"
            transform="rotate(35 596.299 211.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133_2"
            x="442.299"
            y="157.748"
            width="73"
            height="40"
            transform="rotate(35 442.299 157.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134_2"
            x="506.299"
            y="203.748"
            width="73"
            height="40"
            transform="rotate(35 506.299 203.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135_2"
            x="571.299"
            y="249.748"
            width="73"
            height="40"
            transform="rotate(35 571.299 249.748)"
            fill="#AFC0CD"
          />
        </g>
        <g id="dsks_3">
          <rect
            id="Rectangle 130_3"
            x="742.299"
            y="109.748"
            width="73"
            height="40"
            transform="rotate(35 742.299 109.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 136_3"
            x="736.917"
            y="106.943"
            width="83.9497"
            height="40"
            transform="rotate(125 736.917 106.943)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137_3"
            x="969.274"
            y="271.691"
            width="83.9497"
            height="40"
            transform="rotate(125 969.274 271.691)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131_3"
            x="806.299"
            y="154.748"
            width="73"
            height="40"
            transform="rotate(35 806.299 154.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132_3"
            x="870.299"
            y="200.748"
            width="73"
            height="40"
            transform="rotate(35 870.299 200.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133_3"
            x="716.299"
            y="146.748"
            width="73"
            height="40"
            transform="rotate(35 716.299 146.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134_3"
            x="780.299"
            y="192.748"
            width="73"
            height="40"
            transform="rotate(35 780.299 192.748)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135_3"
            x="845.299"
            y="238.748"
            width="73"
            height="40"
            transform="rotate(35 845.299 238.748)"
            fill="#AFC0CD"
          />
        </g>
        <g id="dsks_4">
          <rect
            id="Rectangle 130_4"
            x="749.166"
            y="557.019"
            width="73"
            height="40"
            transform="rotate(-0.585194 749.166 557.019)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 136_4"
            x="743.157"
            y="557.869"
            width="83.9497"
            height="40"
            transform="rotate(89.4148 743.157 557.869)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137_4"
            x="1027.99"
            y="556.64"
            width="83.9497"
            height="40"
            transform="rotate(89.4148 1027.99 556.64)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131_4"
            x="827.4"
            y="556.373"
            width="73"
            height="40"
            transform="rotate(-0.585192 827.4 556.373)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132_4"
            x="906.216"
            y="556.54"
            width="73"
            height="40"
            transform="rotate(-0.585195 906.216 556.54)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133_4"
            x="749.552"
            y="602.239"
            width="73"
            height="40"
            transform="rotate(-0.585194 749.552 602.239)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134_4"
            x="828.369"
            y="602.406"
            width="73"
            height="40"
            transform="rotate(-0.585192 828.369 602.406)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135_4"
            x="907.998"
            y="601.992"
            width="73"
            height="40"
            transform="rotate(-0.585195 907.998 601.992)"
            fill="#AFC0CD"
          />
        </g>
        <g id="dsks_5">
          <rect
            id="Rectangle 130_5"
            x="142.166"
            y="966.019"
            width="73"
            height="40"
            transform="rotate(-0.585194 142.166 966.019)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 136_5"
            x="136.157"
            y="966.869"
            width="83.9497"
            height="40"
            transform="rotate(89.4148 136.157 966.869)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 137_5"
            x="420.99"
            y="965.64"
            width="83.9497"
            height="40"
            transform="rotate(89.4148 420.99 965.64)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 131_5"
            x="220.4"
            y="965.373"
            width="73"
            height="40"
            transform="rotate(-0.585192 220.4 965.373)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 132_5"
            x="299.216"
            y="965.54"
            width="73"
            height="40"
            transform="rotate(-0.585195 299.216 965.54)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 133_5"
            x="142.552"
            y="1011.24"
            width="73"
            height="40"
            transform="rotate(-0.585194 142.552 1011.24)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 134_5"
            x="221.369"
            y="1011.41"
            width="73"
            height="40"
            transform="rotate(-0.585192 221.369 1011.41)"
            fill="#AFC0CD"
          />
          <rect
            id="Rectangle 135_5"
            x="300.998"
            y="1010.99"
            width="73"
            height="40"
            transform="rotate(-0.585195 300.998 1010.99)"
            fill="#AFC0CD"
          />
        </g>
        <rect
          id="Rectangle 138_2"
          x="133"
          y="542"
          width="73"
          height="40"
          transform="rotate(90 133 542)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 139"
          x="133"
          y="620"
          width="73"
          height="40"
          transform="rotate(90 133 620)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 140"
          x="133"
          y="698"
          width="73"
          height="40"
          transform="rotate(90 133 698)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 141"
          x="133"
          y="776"
          width="73"
          height="40"
          transform="rotate(90 133 776)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 142"
          x="133"
          y="542"
          width="73"
          height="40"
          transform="rotate(90 133 542)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 143"
          x="133"
          y="620"
          width="73"
          height="40"
          transform="rotate(90 133 620)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 144"
          x="133"
          y="698"
          width="73"
          height="40"
          transform="rotate(90 133 698)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 145"
          x="133"
          y="776"
          width="73"
          height="40"
          transform="rotate(90 133 776)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 146"
          x="1034"
          y="788"
          width="73"
          height="40"
          transform="rotate(90 1034 788)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 147"
          x="1034"
          y="866"
          width="73"
          height="40"
          transform="rotate(90 1034 866)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 148"
          x="1034"
          y="944"
          width="73"
          height="40"
          transform="rotate(90 1034 944)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 149"
          x="1034"
          y="1022"
          width="73"
          height="40"
          transform="rotate(90 1034 1022)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 150"
          x="1034"
          y="788"
          width="73"
          height="40"
          transform="rotate(90 1034 788)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 151"
          x="1034"
          y="866"
          width="73"
          height="40"
          transform="rotate(90 1034 866)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 152"
          x="1034"
          y="944"
          width="73"
          height="40"
          transform="rotate(90 1034 944)"
          fill="#AFC0CD"
        />
        <rect
          id="Rectangle 153"
          x="1034"
          y="1022"
          width="73"
          height="40"
          transform="rotate(90 1034 1022)"
          fill="#AFC0CD"
        />
        <g id="Group 2">
          <line
            id="Line 14"
            x1="447"
            y1="538.982"
            x2="448"
            y2="814.982"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <line
            id="Line 15"
            x1="418.026"
            y1="849"
            x2="226.026"
            y2="850"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <path
            id="Line 16"
            d="M448 812L447.5 819L445 826.5L443 831.5L440 836.5L435 842L429 846L422 848.5L415 849"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <path
            id="Ellipse 7"
            d="M407 599C407 590.858 405.396 582.796 402.281 575.274C399.165 567.751 394.598 560.917 388.841 555.159C383.083 549.402 376.249 544.835 368.726 541.719C361.204 538.604 353.142 537 345 537L345 599H407Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 8"
            d="M343 537C334.858 537 326.796 538.604 319.274 541.719C311.751 544.835 304.917 549.402 299.159 555.159C293.402 560.917 288.835 567.751 285.719 575.274C282.604 582.796 281 590.858 281 599L343 599L343 537Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 9"
            d="M281 601C281 609.142 282.604 617.204 285.719 624.726C288.835 632.249 293.402 639.083 299.159 644.841C304.917 650.598 311.751 655.165 319.274 658.281C326.796 661.396 334.858 663 343 663L343 601L281 601Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 10"
            d="M345 663C353.142 663 361.204 661.396 368.726 658.281C376.249 655.165 383.083 650.598 388.841 644.841C394.598 639.083 399.165 632.249 402.281 624.726C405.396 617.204 407 609.142 407 601L345 601L345 663Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 11"
            d="M405 751C405 742.858 403.396 734.796 400.281 727.274C397.165 719.751 392.598 712.917 386.841 707.159C381.083 701.402 374.249 696.835 366.726 693.719C359.204 690.604 351.142 689 343 689L343 751H405Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 12"
            d="M341 689C332.858 689 324.796 690.604 317.274 693.719C309.751 696.835 302.917 701.402 297.159 707.159C291.402 712.917 286.835 719.751 283.719 727.274C280.604 734.796 279 742.858 279 751L341 751L341 689Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 13"
            d="M279 753C279 761.142 280.604 769.204 283.719 776.726C286.835 784.249 291.402 791.083 297.159 796.841C302.917 802.598 309.751 807.165 317.274 810.281C324.796 813.396 332.858 815 341 815L341 753L279 753Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 14"
            d="M343 815C351.142 815 359.204 813.396 366.726 810.281C374.249 807.165 381.083 802.598 386.841 796.841C392.598 791.083 397.165 784.249 400.281 776.726C403.396 769.204 405 761.142 405 753L343 753L343 815Z"
            fill="#D7DFE5"
          />
        </g>
        <g id="Group 3">
          <line
            id="Line 14_2"
            x1="697.004"
            y1="1096.02"
            x2="696.539"
            y2="820.018"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <line
            id="Line 15_2"
            x1="726.578"
            y1="786.058"
            x2="918.58"
            y2="785.43"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <path
            id="Line 16_2"
            d="M696.533 823L697.046 816.001L699.561 808.506L701.57 803.51L704.58 798.516L709.591 793.025L715.599 789.037L722.603 786.551L729.604 786.064"
            stroke="#AFC0CD"
            strokeWidth="10"
          />
          <path
            id="Ellipse 7_2"
            d="M737.12 1036.08C737.104 1044.22 738.692 1052.29 741.793 1059.81C744.895 1067.34 749.448 1074.19 755.194 1079.95C760.94 1085.72 767.766 1090.3 775.282 1093.43C782.799 1096.56 790.858 1098.18 799 1098.2L799.12 1036.2L737.12 1036.08Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 8_2"
            d="M801 1098.2C809.142 1098.22 817.207 1096.63 824.735 1093.53C832.263 1090.43 839.107 1085.87 844.875 1080.13C850.644 1074.38 855.224 1067.56 858.354 1060.04C861.485 1052.52 863.104 1044.47 863.12 1036.32L801.12 1036.2L801 1098.2Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 9_2"
            d="M863.124 1034.32C863.14 1026.18 861.552 1018.12 858.45 1010.59C855.349 1003.06 850.795 996.216 845.049 990.448C839.303 984.679 832.477 980.099 824.961 976.969C817.445 973.838 809.386 972.219 801.244 972.203L801.124 1034.2L863.124 1034.32Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 10_2"
            d="M799.244 972.199C791.102 972.184 783.037 973.772 775.509 976.873C767.98 979.974 761.137 984.528 755.368 990.274C749.6 996.02 745.02 1002.85 741.889 1010.36C738.759 1017.88 737.14 1025.94 737.124 1034.08L799.124 1034.2L799.244 972.199Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 11_2"
            d="M739.414 884.083C739.399 892.225 740.987 900.291 744.088 907.819C747.189 915.347 751.743 922.191 757.489 927.959C763.235 933.727 770.061 938.307 777.577 941.438C785.093 944.568 793.152 946.187 801.294 946.203L801.414 884.203L739.414 884.083Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 12_2"
            d="M803.294 946.207C811.436 946.223 819.501 944.635 827.03 941.534C834.558 938.432 841.401 933.879 847.17 928.133C852.938 922.387 857.518 915.561 860.649 908.045C863.779 900.528 865.398 892.469 865.414 884.327L803.414 884.207L803.294 946.207Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 13_2"
            d="M865.418 882.327C865.434 874.185 863.846 866.12 860.745 858.592C857.644 851.064 853.09 844.22 847.344 838.452C841.598 832.683 834.772 828.103 827.256 824.973C819.74 821.842 811.68 820.223 803.538 820.207L803.418 882.207L865.418 882.327Z"
            fill="#D7DFE5"
          />
          <path
            id="Ellipse 14_2"
            d="M801.538 820.203C793.397 820.188 785.331 821.776 777.803 824.877C770.275 827.978 763.431 832.532 757.663 838.278C751.894 844.024 747.314 850.85 744.184 858.366C741.054 865.882 739.434 873.941 739.418 882.083L801.418 882.203L801.538 820.203Z"
            fill="#D7DFE5"
          />
        </g>
      </svg>`;
  const { damaged_equipment } = useSelector((state) => state.issue);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [desk, setDesk] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  var rects = document.querySelectorAll("rect");
  var ellipses = document.querySelectorAll("path");

  useEffect(() => {
    handleClick();
  }, []);

  const setListeners = () => {
    rects.forEach(function (rect) {
      if (rect.id != "Rectangle Main") {
        rect.addEventListener("click", function (evt) {
          setDesk(evt.target.id.split(" ")[1]);
          clearAll();
          evt.currentTarget.classList.add(style.userSelected);
        });
      }
    });

    ellipses.forEach(function (ellipse) {
      ellipse.addEventListener("click", function (evt) {
        setDesk(evt.target.id.split(" ")[1]);

        clearAll();
        evt.currentTarget.classList.add(style.userSelected);
      });
    });
  };

  const clearFigure = (target) => {
    target.classList.remove(style.userSelected);
  };

  const clearAll = () => {
    rects.forEach((rect) => clearFigure(rect));
    ellipses.forEach((ellipse) => clearFigure(ellipse));
  };

  setListeners();

  const handleClick = () => {
    if (!desk) setOpenSnackbar(true);
    else {
      dispatch(
        updateIssue({
          damaged_equipment: { ...damaged_equipment, location: desk },
        })
      );
      navigate("/start-scan");
    }
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <MainLayout title="WorkOptions" inLoginOrRegister={true}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100%"
      >
        {desk ? (
          <Typography variant="body" sx={{ mb: 2 }} fontWeight="bold">
            You selected the desk number: {desk}{" "}
          </Typography>
        ) : (
          <Typography variant="body1" sx={{ mb: 2 }} fontWeight="bold">
            Please select your desk from the map below:
          </Typography>
        )}
        <Box display="flex" flexDirection="column" gap={2}>
          <div dangerouslySetInnerHTML={{ __html: selectedOfficeMap }} />
        </Box>

        <Box display="flex" justifyContent="center">
          <ButtonGlobant type={"success"} props={{ onClick: handleClick }}>
            Confirm Desk
          </ButtonGlobant>
        </Box>
      </Box>

      {openSnackbar && (
        <Snackbar
          sx={{ zIndex: 999999 }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            You must select a desk in the office in order to proceed.
          </Alert>
        </Snackbar>
      )}
    </MainLayout>
  );
}

export default OfficeMap;
