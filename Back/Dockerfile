FROM denoland/deno as build
WORKDIR /app
COPY . .
RUN deno compile -Ao server ./main.ts

FROM gcr.io/distroless/static
COPY --from=build /app/server /server
ENTRYPOINT [ "/server" ]