import fetch from '@/request'

// 获取用户信息
export function getUserInfo(
  uid: string,
): Promise<{ data: { uid: string; name: string; blabala: any } }> {
  return fetch('/user/info', { method: 'GET', params: { uid } })
}
