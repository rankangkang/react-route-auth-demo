// 是否有交集,存在则说明拥有权限
export function hasIntersection(o: any[], t: any[]) {
  return o.some((item) => t.includes(item))
}
