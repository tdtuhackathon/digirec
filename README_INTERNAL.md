1. Clone dự án về: git clone https://github.com/tdtuhackathon/digirec.git
2. git checkout -b dev-<tên mình> (Thí dụ Hiếu sẽ là git checkout -b dev-hieu)
3. git remote add origin https://github.com/tdtuhackathon/digirec.git
4. pnpm install
5. cd vô frontend rồi pnpm install tiếp
6. cd ra ngoài pnpm run deploy
7. pnpm run start

Khi muốn push lên thì nhớ giao tiếp với người làm cùng team để quyết định xem ai push trước rồi người còn lại sẽ pull nha tránh conflict, thật ra thì mình chia branch nên cũng chưa lo đâu nhưng cứ kĩ. Bên cạnh đó thì các bạn nhớ không nên push .parcel-cache nha, hoặc gitignore càng tốt, tại vì dễ gây lỗi cho người sau lắm.