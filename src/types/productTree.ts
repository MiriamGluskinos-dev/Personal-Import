export interface RequiredDocument {
    name: string;
    externalCode: string;
    allowNoDocument: boolean;
}

export interface RequiredLicense {
    externalCode: string;
    licenseConfirmationComputerization: number;
    confirmationTypeLink: string | null;
    confirmationTypeName: string;
    authorityName: string;
    authorityLink: string | null;
}

export interface Question {
    id: number;
    text: string;
    questionNumber: number;
    answers: {
        id: number;
        text: string;
        eAnswerEffect: number;
        productID: number | null;
        nextQuestionWhenEffectIsOneMoreQuestion: number | null;
    }[];
}

export interface Product {
    id: number;
    name: string | null;
    branch: string | null;
    category: string | null;
    keywords: string[];
    requiredLicenses: RequiredLicense[];
    interConditionsRelationshipForProduct: number;
    requiredDocument: RequiredDocument[];
    quantityUnitTypes: string[];
    relaventEntitlementTypes: number[];
    questions: Question[];
}

export interface DataStructure {
    products: Product[];
    status: number;
    technicalInformation: any;
    sevriceInstanceID: string;
    callID: string | null;
}