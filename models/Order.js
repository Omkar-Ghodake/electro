const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const OrderSchema = new Schema(
	{
		shippingInfo: {
			address: {
				type: String,
				required: true
			},
			city: {
				type: String,
				required: true
			},
			state: {
				type: String,
				required: true
			},
			pinCode: {
				type: Number,
				required: true
			},
			phone: {
				type: Number,
				required: true
			}
		},
		orderItems: [
			{
				name: {
					type: String,
					required: true
				},
				price: {
					type: Number,
					required: true
				},
				quantity: {
					type: Number,
					required: true
				},
				product: {
					type: ObjectId,
					ref: 'Product',
					required: true
				}
			}
		],
		user: {
			type: ObjectId,
			ref: 'User',
			required: true
		},
		paymentInfo: {
			id: {
				type: String,
				required: true
			},
			status: {
				type: String,
				required: true
			}
		},
		paidAt: {
			type: Date,
			required: true
		},
		itemsPrice: {
			type: Number,
			default: 0,
			required: true
		},
		taxPrice: {
			type: Number,
			default: 0,
			required: true
		},
		shippingPrice: {
			type: Number,
			default: 0,
			required: true
		},
		totalPrice: {
			type: Number,
			default: 0,
			required: true
		},
		orderStatus: {
			type: String,
			default: 'Processing'
		},
		deliveredAt: Date
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)