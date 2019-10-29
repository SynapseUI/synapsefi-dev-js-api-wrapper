const { POST_CREATE_USER, PATCH_UPDATE_REG_GG } = require('../src/constants/apiReqNames');

module.exports[POST_CREATE_USER] = {
  logins: [
    {
      email: 'test@synapsefi.com',
    },
  ],
  phone_numbers: ['901.111.1111', 'test@synapsefi.com'],
  legal_names: ['Test User'],
};

/** Currently out of use, need to integrate into test when ready. */

module.exports[PATCH_UPDATE_REG_GG] = {
  entity_info: {
    cryptocurrency: true,
    msb: {
      federal: true,
      states: [
        'AL',
      ],
    },
    public_company: false,
    majority_owned_by_listed: false,
    registered_SEC: false,
    regulated_financial: false,
    gambling: false,
    document_id: '{{document_id}}',
  },
  signer: {
    document_id: '{{document_id}}',
    relationship_to_entity: 'CEO',
  },
  compliance_contact: {
    document_id: '{{document_id}}',
    relationship_to_entity: 'CEO',
  },
  primary_controlling_contact: {
    document_id: '{{document_id}}',
    relationship_to_entity: 'CEO',
  },
  owners: [
    {
      document_id: '{{document_id}}',
      title: 'CEO',
      ownership: 95,
    },
  ],
};
