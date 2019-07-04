import styled from 'styled-components/native'

export const Container = styled.View``

export const Header = styled.View`
  display: flex;
  align-items: center;
  margin: 30px;
  padding-bottom: 30px;
  border-bottom-width: 1px;
  border-color: #eee;
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`

export const Name = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 6px;
  text-align: center;
`

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  line-height: 18px;
  color: #999;
  margin-top: 7px;
  text-align: center;
`

export const Repositories = styled.FlatList``
