export function delay(message: string, time: number): Promise<string> {
    return new Promise((resolve, reject) => {
      if (time >= 0) {
        return setTimeout(() => resolve(message), time);
        } else { 
            reject(new Error('Time must be a positive number'));
        }
    });
}