import axios, { tokenName } from "./axios";
import sha256 from "sha256";
import { dataType, detailDataType, loginProps, modifyDataType, tagType } from "@/shared/types";

export const articleNumPerPage = 10;

export function checkLogin() {
  return !!sessionStorage.getItem(tokenName);
}

export async function login(data: loginProps) {
  if (sessionStorage.getItem(tokenName)) {
    return true;
  }
  return await axios.post("/login", {
    pwd: sha256(data.pwd)
  })
    .then(res => {
      if (res.data.status === 200) {
        alert("登录成功！");
        const token = res.data.token;
        sessionStorage.setItem(tokenName, token);
        return true;
      }
      else {
        alert("登录失败！");
        return false;
      }
    })
    .catch(e => console.log(e));
}

export async function createOrUpdate(data: detailDataType) {
  if (!checkLogin()) {
    alert("请先登录！");
    return false;
  }
  return await axios.post('/createOrUpdate', data)
    .then((res) => {
      if (res.data.status === 200) {
        return true;
      }
      else return false
    })
    .catch(e => console.log(e));
}

export async function deleteArticle(id: string) {
  if (!checkLogin()) {
    alert("请先登录！");
    return false;
  }
  return await axios.delete("/deleteArticle", {
    params: {
      id
    }
  }).then(res => {
    if (res.data.status === 200) {
      alert("删除成功！")
      return true;
    }
    else {
      alert("删除失败！");
      return false;
    }
  }).catch(e => console.log(e));
}

export async function getArticle(page: number = 0, pageSize: number = 10, regStr: string = "") {
  return await axios.get("/getArticle", {
    params: {
      page,
      pageSize,
      regStr
    }
  }).then(res => res.data as dataType[])
    .catch(e => console.log(e));
}
export async function getContentByID(_id: string) {
  return await axios.get('/getContentByID', {
    params: {
      _id
    }
  }).then(res => {
    if (res.data.status === 200) {
      return res.data.data as modifyDataType
    }
    else return null;
  }).catch(e => console.log(e));
}
export async function getArticleNum(regStr: string) {
  return await axios.get("/getArticleNum", {
    params: {
      regStr
    }
  }).then((res) => {
    if (res.data.status === 200)
      return +res.data.data
    else return 0;
  })
    .catch(e => console.log(e));
}

export async function getTagsInfo() {
  return await axios.get("/getTagsInfo").then(res => {
    if (res.data.status === 200) {
      return res.data.data as tagType[];
    }
    else return []
  }).catch(e => console.log(e))
}