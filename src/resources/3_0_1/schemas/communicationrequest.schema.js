const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let CommunicationRequestResourceType = new GraphQLEnumType({
	name: 'CommunicationRequestResourceType',
	values: {
		CommunicationRequest: { value: 'CommunicationRequest' }
	}
});

/**
 * @name exports
 * @summary CommunicationRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CommunicationRequest',
	description: 'Base StructureDefinition for CommunicationRequest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(CommunicationRequestResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A plan or proposal that is fulfilled in whole or in part by this request.'
		},
		replaces: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Completed or terminated request(s) whose function is taken by this new request.'
		},
		groupIdentifier: {
			type: require('./identifier.schema'),
			description: 'A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the proposal or order.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the proposal or order.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/communication-category
		category: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The type of message to be sent such as alert, notification, reminder, instruction, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description: 'Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ParticipationMode
		medium: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A channel that was used for this communication (e.g. email, fax).'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'The patient or group that is the focus of this communication request.'
		},
		recipient: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.'
		},
		topic: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The resources which were related to producing this communication request.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'The encounter or episode of care within which the communication request was created.'
		},
		payload: {
			type: new GraphQLList(require('./communicationrequestpayload.schema')),
			description: 'Text, attachment(s), or resource(s) to be communicated to the recipient.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The time when this communication is to occur.'
		},
		_occurrenceDateTime: {
			type: require('./element.schema'),
			description: 'The time when this communication is to occur.'
		},
		occurrencePeriod: {
			type: require('./period.schema'),
			description: 'The time when this communication is to occur.'
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.'
		},
		_authoredOn: {
			type: require('./element.schema'),
			description: 'For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.'
		},
		sender: {
			type: require('./reference.schema'),
			description: 'The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.'
		},
		requester: {
			type: require('./communicationrequestrequester.schema'),
			description: 'The individual who initiated the request and has responsibility for its activation.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActReason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Describes why the request is being made in coded or textual form.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Indicates another resource whose existence justifies this request.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Comments made about the request by the requester, sender, recipient, subject or other participants.'
		}
	})
});