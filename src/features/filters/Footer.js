import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilters } from './filtersSlice'

const Footer = () => (
  <div>
    <span>フィルタ／ </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>全てのTODO</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>残タスク</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>完了済み</FilterLink>
  </div>
)

export default Footer
