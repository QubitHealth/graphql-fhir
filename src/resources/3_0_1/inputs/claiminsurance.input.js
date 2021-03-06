const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary Claiminsurance Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Claiminsurance_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_sequence: {
			type: require('./element.input.js'),
			description:
				'Sequence of coverage which serves to provide a link and convey coordination of benefit order.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'Sequence of coverage which serves to provide a link and convey coordination of benefit order.',
		},
		_focal: {
			type: require('./element.input.js'),
			description:
				'A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.',
		},
		focal: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'A flag to indicate that this Coverage is the focus for adjudication. The Coverage against which the claim is to be adjudicated.',
		},
		coverage: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Reference to the program or plan identification, underwriter or payor.',
		},
		_businessArrangement: {
			type: require('./element.input.js'),
			description:
				'The contract number of a business agreement which describes the terms and conditions.',
		},
		businessArrangement: {
			type: GraphQLString,
			description:
				'The contract number of a business agreement which describes the terms and conditions.',
		},
		_preAuthRef: {
			type: require('./element.input.js'),
			description:
				'A list of references from the Insurer to which these services pertain.',
		},
		preAuthRef: {
			type: new GraphQLList(GraphQLString),
			description:
				'A list of references from the Insurer to which these services pertain.',
		},
		claimResponse: {
			type: GraphQLString,
			description: 'The Coverages adjudication details.',
		},
	}),
});
