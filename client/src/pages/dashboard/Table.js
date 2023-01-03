import React, { useEffect } from "react";
import "../../pages/dashboard/Table.module.scss";
import { useState } from "react";

// import { columnsTable } from "./xmltablecolumsfield";
import { useDispatch } from "react-redux";
import { XmldataPostRoute } from "../../api/xmldataPost";
import { xmlDataAction } from "../../Actions/PostAction";
import { Button } from "@mui/material";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TableXml = () => {
  const columnsTable = [
    { id: "CreatedDatetime", label: "Created Datetime", minWidth: 170 },
    {
      id: "AddressLineText",
      label: " SUBJECT_PROPERTY AddressLine Text",
      minWidth: 100,
    },
    {
      id: "CityName",
      label: "CityName",
      minWidth: 170,
    },
    {
      id: "CountyName",
      label: "Country Name",
      minWidth: 170,
    },
    {
      id: "PostalCode",
      label: "PostalCode",
      minWidth: 170,
    },
    {
      id: "StateCode",
      label: "StateCode",
      minWidth: 170,
    },
    {
      id: "UnparsedLegalDescription",
      label: "Unparsed Legal Description",
      minWidth: 170,
    },
    {
      id: "CommunityPropertyStateIndicator",
      label: "Community Property State Indicator",
      minWidth: 170,
    },
    {
      id: "FHASecondaryResidenceIndicator",
      label: "FHA Secondary Residence Indicator",
      minWidth: 170,
    },
    {
      id: "FinancedUnitCount",
      label: "Financed Unit Count",
      minWidth: 170,
    },
    {
      id: "PropertyEstateType",
      label: "Property Estate Type",
      minWidth: 170,
    },
    {
      id: "PropertyExistingCleanEnergyLienIndicator",
      label: "Property Existing Clean Energy LienIndicator",
      minWidth: 170,
    },
    {
      id: "PropertyInProjectIndicator",
      label: "Property In ProjectIndicator",
      minWidth: 170,
    },
    {
      id: "PropertyUsageType",
      label: "Property UsageType",
      minWidth: 170,
    },
    {
      id: "PUDIndicator",
      label: "PUDIndicator",
      minWidth: 170,
    },
    {
      id: "AmortizationType",
      label: "Amortization Type",
      minWidth: 170,
    },
    {
      id: "LoanAmortizationPeriodCount",
      label: "Loan Amortization PeriodCount",
      minWidth: 170,
    },
    {
      id: "LoanAmortizationPeriodType",
      label: "Loan Amortization PeriodType",
      minWidth: 170,
    },
    {
      id: "SectionOfActType",
      label: "Section Of ActType",
      minWidth: 170,
    },
    {
      id: "HMDA_HOEPALoanStatusIndicator",
      label: "HMDA_HOEPA LoanStatus Indicator",
      minWidth: 170,
    },
    {
      id: "BalloonIndicator",
      label: "Balloon Indicator",
      minWidth: 170,
    },
    {
      id: "BorrowerCount",
      label: "Borrower Count",
      minWidth: 170,
    },
    {
      id: "BuydownTemporarySubsidyFundingIndicator",
      label: "Buydown Temporary Subsidy Funding Indicator",
      minWidth: 170,
    },
    {
      id: "ConstructionLoanIndicator",
      label: "Construction Loan Indicator",
      minWidth: 170,
    },
    {
      id: "ConversionOfContractForDeedIndicator",
      label: "Conversion Of Contract For DeedIndicator",
      minWidth: 170,
    },
    {
      id: "EnergyRelatedImprovementsIndicator",
      label: "Energy Related Improvements Indicator",
      minWidth: 170,
    },
    {
      id: "InterestOnlyIndicator",
      label: "Interest Only Indicator",
      minWidth: 170,
    },
    {
      id: "NegativeAmortizationIndicator",
      label: "Negative Amortization Indicator",
      minWidth: 170,
    },
    {
      id: "PrepaymentPenaltyIndicator",
      label: "Prepayment Penalty Indicator",
      minWidth: 170,
    },
    {
      id: "RenovationLoanIndicator",
      label: "Renovation Loan Indicator",
      minWidth: 170,
    },
    {
      id: "LoanIdentifier",
      label: "Loan Identifier",
      minWidth: 170,
    },
    {
      id: "LoanIdentifierType",
      label: "Loan Identifier Type",
      minWidth: 170,
    },
    {
      id: "LoanMaturityPeriodCount",
      label: "Loan Maturity Period Count",
      minWidth: 170,
    },
    {
      id: "LoanOriginationSystemName",
      label: "Loan Origination System Name",
      minWidth: 170,
    },
    {
      id: "LoanOriginationSystemVendorIdentifier",
      label: "Loan Origination System Vendor Identifier",
      minWidth: 170,
    },
    {
      id: "LoanOriginationSystemVersionIdentifier",
      label: "Loan Origination System Version Identifier",
      minWidth: 170,
    },
    {
      id: "LienPriorityType",
      label: "Lien Priority Type",
      minWidth: 170,
    },
    {
      id: "LoanPurposeType",
      label: "Loan Purpose Type",
      minWidth: 170,
    },
    {
      id: "MortgageType",
      label: "Mortgage Type",
      minWidth: 170,
    },
    {
      id: "ContactPointEmailValue",
      label: "Contact Point Email Value",
      minWidth: 170,
    },
    {
      id: "FirstName",
      label: "FirstName",
      minWidth: 170,
    },
    {
      id: "LastName",
      label: "LastName",
      minWidth: 170,
    },
    {
      id: "BorrowerBirthDate",
      label: "Borrower Birth Date",
      minWidth: 170,
    },
    {
      id: "CommunityPropertyStateResidentIndicator",
      label: "Community Property State Resident Indicator",
      minWidth: 170,
    },
    {
      id: "DependentCount",
      label: "Dependent Count",
      minWidth: 170,
    },
    {
      id: "SpousalVABenefitsEligibilityIndicator",
      label: "Spousal VA Benefits Eligibility Indicator",
      minWidth: 170,
    },
    {
      id: "CitizenshipResidencyType",
      label: "Citizenship Residency Type",
      minWidth: 170,
    },
    {
      id: "FHASecondaryResidenceIndicator",
      label: "FHA Secondary Residence Indicator",
      minWidth: 170,
    },
    {
      id: "HomeownerPastThreeYearsType",
      label: "Home owner Past Three Years Type",
      minWidth: 170,
    },
    {
      id: "IntentToOccupyType",
      label: "Intent To Occupy Type",
      minWidth: 170,
    },
    {
      id: "HMDAEthnicityRefusalIndicator",
      label: "HMDA Ethnicity Refusal Indicator",
      minWidth: 170,
    },
    {
      id: "HMDAGenderRefusalIndicator",
      label: "HMDA Gender Refusal Indicator",
      minWidth: 170,
    },
    {
      id: "HMDARaceRefusalIndicator",
      label: "HMDA Race Refusal Indicator",
      minWidth: 170,
    },
    {
      id: "ULAD:ApplicationTakenMethodType",
      label: "ULAD:ApplicationTakenMethodType",
      minWidth: 170,
    },
    {
      id: "AddressLineText",
      label: "RESIDENCE Address Line Text",
      minWidth: 170,
    },
    {
      id: "CityName",
      label: "CityName",
      minWidth: 170,
    },
    {
      id: "CountryCode",
      label: "CountryCode",
      minWidth: 170,
    },
    {
      id: "PostalCode",
      label: "PostalCode",
      minWidth: 170,
    },
    {
      id: "StateCode",
      label: "StateCode",
      minWidth: 170,
    },
    {
      id: "BorrowerResidencyType",
      label: "Borrower Residency Type",
      minWidth: 170,
    },
    {
      id: "PartyRoleType",
      label: "Party Role Type",
      minWidth: 170,
    },
    {
      id: "TaxpayerIdentifierType",
      label: "Taxpayer Identifier Type",
      minWidth: 170,
    },
    {
      id: "TaxpayerIdentifierValue",
      label: "Taxpayer Identifier Value",
      minWidth: 170,
    },
    {
      id: "ContactPointEmailValue",
      label: "Contact Point Email Value",
      minWidth: 170,
    },
    {
      id: "FullName",
      label: "FullName",
      minWidth: 170,
    },
    {
      id: "LicenseAuthorityLevelType",
      label: "License Authority Level Type",
      minWidth: 170,
    },
    {
      id: "LicenseIdentifier",
      label: "License Identifier",
      minWidth: 170,
    },
    {
      id: "PartyRoleType",
      label: "Party Role Type",
      minWidth: 170,
    },
  ];

  let fileReader;
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const dispatch = useDispatch();

  const [xml, setxml] = useState();
  const [rowopen, setrowopen] = useState(false);
  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content); //string xml
    var parser = new DOMParser();
    var xmlDoc2 = parser.parseFromString(content, "application/xml");
    console.log(xmlDoc2); //xml dom
    setxml(xmlDoc2);
    console.log(xml, "bhai main");
    setrowopen(true);

    const data = Datasender(xmlDoc2);
    dispatch(xmlDataAction(data));
    console.log("hi", data);
    // setxml(URL.createObjectURL(data)); this didn't work as well (done for table)
  };
  const [ivar, seti] = useState(0);

  const Datasender = (xml) => {
    const datatosend = {};
    columnsTable.map((column) => {
      const label = column.label;

      if (label == "SUBJECT_PROPERTY AddressLine Text") {
        return (datatosend[`${label}`] = xml.getElementsByTagName(
          `${column.id}`
        )[0].childNodes[0].nodeValue);
      } else if (label == "RESIDENCE Address Line Text") {
        return (datatosend[`${label}`] = xml.getElementsByTagName(
          `${column.id}`
        )[1].childNodes[0].nodeValue);
      }
      datatosend[`${label}`] = xml.getElementsByTagName(
        `${column.id}`
      )[0].childNodes[0].nodeValue;
    });
    return datatosend;
  };

  // I tried using localStorage
  // useEffect(() => {
  //   const data = window.localStorage.getItem("Full_Table");
  //   setrowopen(JSON.parse(data));
  // }, []);
  // useEffect(() => {
  //   window.localStorage.setItem("Full_Table", JSON.stringify(rowopen));
  // }, [rowopen]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <input
          style={{
            backgroundColor: "#5048E5",
            color: "white",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
          type="file"
          id="file"
          className="input-file"
          accept=".xml"
          onChange={(e) => handleFileChosen(e.target.files[0])}
        />
      </div>

      <div
        className="tablecontainer"
        style={{ width: "100vw", overflow: "auto" }}
      >
        <table>
          <tr>
            {columnsTable
              .filter((item, index) => index < 5)
              .map((column) => {
                return (
                  <th
                    style={{
                      minWidth: "150px",

                      border: "1px solid rgba(255,255,255,0.3)",
                      minHeight: "20px",
                      borderRight: "none",
                    }}
                  >
                    {column.label}
                  </th>
                );
              })}
          </tr>
          {rowopen ? (
            <tr>
              {columnsTable
                .filter((item, index) => index < 5)
                .map((columns) => {
                  if (
                    columns.label == "SUBJECT_PROPERTY AddressLine Text" &&
                    ivar == 0
                  ) {
                    var value =
                      xml.getElementsByTagName(`AddressLineText`)[0]
                        .childNodes[0].nodeValue;
                    seti(1);
                    return (
                      <div>
                        <td
                          style={{
                            textAlign: "center",
                            minWidth: "150px",
                            border: "1px solid rgba(255,255,255,0.3)",
                            minHeight: "20px",
                            borderRight: "none",
                            borderTop: "none",
                          }}
                        >
                          {`${value}`}
                        </td>
                      </div>
                    );
                  } else if (columns.label == "RESIDENCE Address Line Text") {
                    var value =
                      xml.getElementsByTagName(`AddressLineText`)[1]
                        .childNodes[0].nodeValue;

                    return (
                      <td
                        style={{
                          textAlign: "center",
                          minWidth: "150px",
                          border: "1px solid rgba(255,255,255,0.3)",
                          minHeight: "20px",
                          borderRight: "none",
                          borderTop: "none",
                        }}
                      >
                        {`${value}`}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        style={{
                          textAlign: "center",
                          minWidth: "150px",
                          border: "1px solid rgba(255,255,255,0.3)",
                          minHeight: "20px",
                          borderRight: "none",
                          borderTop: "none",
                        }}
                      >
                        {xml.getElementsByTagName(`${columns.id}`)[0]
                          ? xml.getElementsByTagName(`${columns.id}`)[0]
                              .childNodes[0].nodeValue
                          : `No data in this field ${columns.id}}`}
                      </td>
                    );
                  }
                })}
            </tr>
          ) : (
            ""
          )}
        </table>
      </div>


      <div
        className="tablecontainer"
        style={{ width: "100vw", overflow: "auto" }}
      >
        <table>
          <tr>
            {columnsTable
              .filter((item, index) => index < 5)
              .map((column) => {
                return (
                  <th
                    style={{
                      minWidth: "150px",

                      border: "1px solid rgba(255,255,255,0.3)",
                      minHeight: "20px",
                      borderRight: "none",
                    }}
                  >
                    {column.label}
                  </th>
                );
              })}
          </tr>
          {rowopen ? (
            <tr>
              {columnsTable
                .filter((item, index) => index < 5)
                .map((columns) => {
                  if (
                    columns.label == "SUBJECT_PROPERTY AddressLine Text" &&
                    ivar == 0
                  ) {
                    var value =
                      xml.getElementsByTagName(`AddressLineText`)[0]
                        .childNodes[0].nodeValue;
                    seti(1);
                    return (
                      <div>
                        <td
                          style={{
                            textAlign: "center",
                            minWidth: "150px",
                            border: "1px solid rgba(255,255,255,0.3)",
                            minHeight: "20px",
                            borderRight: "none",
                            borderTop: "none",
                          }}
                        >
                          {`${value}`}
                        </td>
                      </div>
                    );
                  } else if (columns.label == "RESIDENCE Address Line Text") {
                    var value =
                      xml.getElementsByTagName(`AddressLineText`)[1]
                        .childNodes[0].nodeValue;

                    return (
                      <td
                        style={{
                          textAlign: "center",
                          minWidth: "150px",
                          border: "1px solid rgba(255,255,255,0.3)",
                          minHeight: "20px",
                          borderRight: "none",
                          borderTop: "none",
                        }}
                      >
                        {`${value}`}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        style={{
                          textAlign: "center",
                          minWidth: "150px",
                          border: "1px solid rgba(255,255,255,0.3)",
                          minHeight: "20px",
                          borderRight: "none",
                          borderTop: "none",
                        }}
                      >
                        {xml.getElementsByTagName(`${columns.id}`)[0]
                          ? xml.getElementsByTagName(`${columns.id}`)[0]
                              .childNodes[0].nodeValue
                          : `No data in this field ${columns.id}}`}
                      </td>
                    );
                  }
                })}
            </tr>
          ) : (
            ""
          )}
        </table>
      </div>

      <Button
        style={{
          display: "flex",
          position: "relative",
          left: "57rem",
        }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        See More
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Table
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <table>
          <tr>
            {columnsTable.map((column) => {
              return (
                <th
                  style={{
                    minWidth: "150px",
                    gap: "10px",
                    border: "1px solid rgba(255,255,255,0.7)",
                    minHeight: "20px",
                    borderRight: "none",
                    fontSize: "12px",
                  }}
                >
                  {column.label}
                </th>
              );
            })}
          </tr>
          {rowopen ? (
            <tr>
              {columnsTable.map((columns) => {
                if (
                  columns.label == "SUBJECT_PROPERTY AddressLine Text" &&
                  ivar == 0
                ) {
                  var value =
                    xml.getElementsByTagName(`AddressLineText`)[0].childNodes[0]
                      .nodeValue;
                  seti(1);
                  return (
                    <div>
                      <td
                        style={{
                          textAlign: "center",
                          minWidth: "150px",
                          border: "1px solid rgba(255,255,255,0.7)",
                          minHeight: "20px",
                          borderRight: "none",
                          fontSize: "10px",
                          borderTop: "none",
                        }}
                      >
                        {`${value}`}
                      </td>
                    </div>
                  );
                } else if (columns.label == "RESIDENCE Address Line Text") {
                  var value =
                    xml.getElementsByTagName(`AddressLineText`)[1].childNodes[0]
                      .nodeValue;

                  return (
                    <td
                      style={{
                        textAlign: "center",
                        minWidth: "150px",
                        border: "1px solid rgba(255,255,255,0.3)",
                        minHeight: "20px",
                        fontSize: "10px",
                        borderRight: "none",
                        borderTop: "none",
                      }}
                    >
                      {`${value}`}
                    </td>
                  );
                } else {
                  return (
                    <td
                      style={{
                        textAlign: "center",
                        minWidth: "150px",
                        border: "1px solid rgba(255,255,255,0.3)",
                        minHeight: "20px",
                        borderRight: "none",
                        borderTop: "none",
                      }}
                    >
                      {xml.getElementsByTagName(`${columns.id}`)[0]
                        ? xml.getElementsByTagName(`${columns.id}`)[0]
                            .childNodes[0].nodeValue
                        : `No data in this field ${columns.id}}`}
                    </td>
                  );
                }
              })}
            </tr>
          ) : (
            ""
          )}
        </table>

        <table>
          <tr>
            {columnsTable.map((column) => {
              return (
                <th
                  style={{
                    minWidth: "150px",
                    gap: "10px",
                    border: "1px solid rgba(255,255,255,0.7)",
                    minHeight: "20px",
                    borderRight: "none",
                    fontSize: "12px",
                  }}
                >
                  {column.label}
                </th>
              );
            })}
          </tr>
          {rowopen ? (
            <tr>
              {columnsTable.map((columns) => {
                if (
                  columns.label == "SUBJECT_PROPERTY AddressLine Text" &&
                  ivar == 0
                ) {
                  var value =
                    xml.getElementsByTagName(`AddressLineText`)[0].childNodes[0]
                      .nodeValue;
                  seti(1);
                  return (
                    <div>
                      <td
                        style={{
                          textAlign: "center",
                          minWidth: "150px",
                          border: "1px solid rgba(255,255,255,0.7)",
                          minHeight: "20px",
                          borderRight: "none",
                          fontSize: "10px",
                          borderTop: "none",
                        }}
                      >
                        {`${value}`}
                      </td>
                    </div>
                  );
                } else if (columns.label == "RESIDENCE Address Line Text") {
                  var value =
                    xml.getElementsByTagName(`AddressLineText`)[1].childNodes[0]
                      .nodeValue;

                  return (
                    <td
                      style={{
                        textAlign: "center",
                        minWidth: "150px",
                        border: "1px solid rgba(255,255,255,0.3)",
                        minHeight: "20px",
                        fontSize: "10px",
                        borderRight: "none",
                        borderTop: "none",
                      }}
                    >
                      {`${value}`}
                    </td>
                  );
                } else {
                  return (
                    <td
                      style={{
                        textAlign: "center",
                        minWidth: "150px",
                        border: "1px solid rgba(255,255,255,0.3)",
                        minHeight: "20px",
                        borderRight: "none",
                        borderTop: "none",
                      }}
                    >
                      {xml.getElementsByTagName(`${columns.id}`)[0]
                        ? xml.getElementsByTagName(`${columns.id}`)[0]
                            .childNodes[0].nodeValue
                        : `No data in this field ${columns.id}}`}
                    </td>
                  );
                }
              })}
            </tr>
          ) : (
            ""
          )}
        </table>
      </Dialog>
    </div>
  );
};

export default TableXml;
