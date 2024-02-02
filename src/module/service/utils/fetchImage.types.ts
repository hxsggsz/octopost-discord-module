export interface ResError {
  message: string;
}

export interface ImageData {
  link: string;
  error: ResError | undefined;
}

export interface ResContent {
  data: ImageData;
  success: boolean;
  status: number;
}
