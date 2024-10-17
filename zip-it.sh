#!/bin/bash
TAR_FILE="../compass-calendar-take-home.tar.gz"
FOLDER_TO_TAR="."
tar --exclude="node_modules" --exclude="pnpm-lock.yaml" -cvzf $TAR_FILE $FOLDER_TO_TAR
echo "Gzipped into $TAR_FILE"
