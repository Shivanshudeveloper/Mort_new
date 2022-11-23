const mongoose = require("mongoose");

const XmlDocSchema = mongoose.Schema(
  {
    CreatedDatetime: {
      type: String,
    },
    Subject_AddressLineText: { type: String },
    Subject_CityName: { type: String },
    Subject_CountryName: { type: String },
    Subject_PostalCode: { type: String },
    Subject_StateCode: { type: String },
    UnparsedLegalDescription: { type: String },
    PROPERTY_DETAIL_CommunityPropertyStateIndicator: { type: String },
    PROPERTY_DETAIL_FHASecondaryResidenceIndicator: { type: String },
    PROPERTY_DETAIL_FinancedUnitCount: { type: String },
    PROPERTY_DETAIL_PropertyEstateType: { type: String },
    PROPERTY_DETAIL_PropertyExistingCleanEnergyLienIndicator: { type: String },
    PROPERTY_DETAIL_PropertyInProjectIndicator: { type: String },
    PROPERTY_DETAIL_PropertyUsageType: { type: String },
    PROPERTY_DETAIL_PUDIndicator: { type: String },
    AMORTIZATION_RULE_AmortizationType: { type: String },
    AMORTIZATION_RULE_LoanAmortizationPeriodCount: { type: String },
    AMORTIZATION_RULE_LoanAmortizationPeriodType: { type: String },
    GOVERNMENT_LOAN_SectionOfActType: { type: String },
    HMDA_LOAN_HMDA_HOEPALoanStatusIndicator: { type: String },
    LOAN_DETAIL_BalloonIndicator: { type: String },
    LOAN_DETAIL_BorrowerCount: { type: String },
    LOAN_DETAIL_BuydownTemporarySubsidyFundingIndicator: { type: String },
    LOAN_DETAIL_ConstructionLoanIndicator: { type: String },
    LOAN_DETAIL_ConversionOfContractForDeedIndicator: { type: String },
    LOAN_DETAIL_EnergyRelatedImprovementsIndicator: { type: String },
    LOAN_DETAIL_InterestOnlyIndicator: { type: String },
    LOAN_DETAIL_NegativeAmortizationIndicator: { type: String },
    LOAN_DETAIL_PrepaymentPenaltyIndicator: { type: String },
    LOAN_DETAIL_RenovationLoanIndicator: { type: String },
    LOAN_IDENTIFIERS:[];
  },
  {
    timestamps: true,
  }
);

const XmlDocModel = mongoose.model("xmldocs", XmlDocSchema);
module.exports = XmlDocModel;
