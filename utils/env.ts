export class Env {
    public static readonly HomePageUrl: string = process.env.HomePageUrl;
    public static readonly Email: string = process.env.Email;
    public static readonly Password: string = process.env.Password;
    public static readonly Retries: number = parseInt(process.env.Retries);
    public static readonly Workers: number = parseInt(process.env.Workers);
}