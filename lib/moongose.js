import { client, connect} from "mongoose"

export default async function connectDB() {
    await connect("mongodb+srv://ricardo:Radio.fm-123@imanity.avkzu.mongodb.net/?retryWrites=true&w=majority&appName=Imanity")
}