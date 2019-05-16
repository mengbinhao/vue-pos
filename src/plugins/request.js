//encapsulate request
import { Service } from './service'

export function getOftenGoods() {
	return Service({
		baseURL: 'https://www.easy-mock.com/mock/5cd948c7a8b9c917e15e7f4d/oftenGoods',
		method: 'get'
  })
}

function getTypeGoods() {
	return Service({
		baseURL: 'https://www.easy-mock.com/mock/5cd948c7a8b9c917e15e7f4d/typeGoods',
		method: 'get'
	})
}

export function getOftenGoodsAndTypeGoods() {
	return Service.all([getOftenGoods(), getTypeGoods()]).then(
		Service.spread((data1, data2) => {
			return [data1, data2]
		})
	)
}

export function getConfigsByProductId(productId) {
  return Service({
		url: '/manager/getConfigsByProductId',
		method: 'get',
    params: { productId: productId }
  })
}

export function getAllAndroidPlugins() {
  return Service({
    url: '/manager/getAndroidPlugin ',
    method: 'get'
  })
}

export function addNewAndroidPlugin(data) {
  return Service({
    url: '/manager/addAndroidPlguin',
    data: JSON.stringify(data)
  })
}
