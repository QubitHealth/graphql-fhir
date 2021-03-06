const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary StructureMapgrouprule Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapgrouprule_Input',
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
		_name: {
			type: require('./element.input.js'),
			description: 'Name of the rule for internal references.',
		},
		name: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Name of the rule for internal references.',
		},
		source: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./structuremapgrouprulesource.input.js')),
			),
			description: 'Source inputs to the mapping.',
		},
		target: {
			type: new GraphQLList(require('./structuremapgroupruletarget.input.js')),
			description: 'Content to create because of this mapping rule.',
		},
		dependent: {
			type: new GraphQLList(
				require('./structuremapgroupruledependent.input.js'),
			),
			description: 'Which other rules to apply in the context of this rule.',
		},
		_documentation: {
			type: require('./element.input.js'),
			description: 'Documentation for this instance of data.',
		},
		documentation: {
			type: GraphQLString,
			description: 'Documentation for this instance of data.',
		},
	}),
});
