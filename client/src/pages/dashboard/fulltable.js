import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Fulltable() {
  const [rowopen, setrowopen] = useState(false);

  const columnsTable = [
    { id: "CreatedDatetime", label: "Created Datetime", minWidth: 170 },
    {
      id: "AddressLineText",
      label: "SUBJECT_PROPERTY AddressLine Text",
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
  return (
    <table>
      <tr>
        {columnsTable.map((column) => {
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
                xml.getElementsByTagName(`AddressLineText`)[1].childNodes[0]
                  .nodeValue;

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
                    ? xml.getElementsByTagName(`${columns.id}`)[0].childNodes[0]
                        .nodeValue
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
  );
}

export default Fulltable;
