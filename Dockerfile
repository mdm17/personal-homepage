# syntax=docker/dockerfile:1

# Build stage
FROM node:18-alpine AS build
LABEL org.opencontainers.image.source=https://github.com/mdm17/personal-homepage

# Set the working directory
WORKDIR /app

# Set ENV
RUN --mount=type=secret,id=ALIAS_NAME \
export ALIAS_NAME=$(cat /run/secrets/ALIAS_NAME) && \
echo $ALIAS_NAME

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . ./

# Build the application
RUN npm run build

################################################################################
# Runtime stage
FROM node:18-alpine AS runtime
LABEL org.opencontainers.image.source=https://github.com/mdm17/personal-homepage

# Install any runtime dependencies
RUN apk --update add ca-certificates tzdata && update-ca-certificates

# Set the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app .

# Expose the port the application will run on
EXPOSE 3000

# Run the application as a non-privileged user
ARG UID=10001
RUN adduser --disabled-password --gecos "" --home "/nonexistent" --shell "/sbin/nologin" --no-create-home --uid "${UID}" appuser
USER appuser

# Start the application
CMD ["npm", "run", "start"]
