import Link from "next/link"

export default function NavBar() {
  return (
    <nav>
        <ul>
          <li>
            <Link href='/'>Documentation</Link>
          </li>
          <li>
            <Link href='/about'>Community</Link>
          </li>
        </ul>
        <style jsx>{`
          nav{
            margin-left: 80%;
          }
          a {
            color: rgb(0, 0, 0);
            text-decoration: none;
          }
          // 导航栏选中时出现下划线
          a:focus, a:hover {
            text-decoration:underline; 
          }
          // 去掉无序列表前边的点
          ul {
            list-style-type: none;
          }
          // 让无序列表横向排列
          li {
            display: inline;
          }
          // 让无序列表从第二个起向左对齐，并保持一定间距
          li:not(:first-child){
            margin-left: 0.75rem;
          }
        `}</style>
    </nav>
  )
}
