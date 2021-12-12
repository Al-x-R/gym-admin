export class ProductModel {
	_id: string;
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	description: string;
	calculatedRating: number;
	categories: string[];
	tags: string;
	characteristics: {
		[key: string]: string;
	};
}
