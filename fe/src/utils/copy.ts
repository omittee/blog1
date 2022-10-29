export default function copy(data: string) {
  let textarea = document.createElement("textarea");
  textarea.style.width = "0";
  textarea.style.height = "0";
  textarea.style.position = "fixed";
  textarea.value = data;
  document.body.appendChild(textarea);
  textarea.select();
  let flag = true;
  try {
    document.execCommand("copy")
  }
  catch {
    flag = false;
  }
  finally {
    document.body.removeChild(textarea);
    console.log(flag ? "复制成功": "复制失败")
  }
}